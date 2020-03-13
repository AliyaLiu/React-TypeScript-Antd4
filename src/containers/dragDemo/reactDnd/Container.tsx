import React from 'react';
// import { name } from 'faker'
import Card from './Card';
import update from 'immutability-helper';
import styles from './index.scss';
import { message } from 'antd';

const style = {
    width: 400,
    height: 360,
}

export interface ContainerState {
    cardsById: { [key: string]: any },
    cardsByIndex: any[],
    addCardList: any[],
}

function buildCardData() {
    const cardsById: { [key: string]: any } = {}
    const cardsByIndex = [];
    const addCardList = [];

    for (let i = 0; i < 9; i += 1) {
        const card = { id: i+1, text: i+1 }
        cardsById[card.id] = card;
        cardsByIndex[i] = card;
    }

    for( let i=0;i<8;i++ ){
        const addcard = { id: i+20, text: i +20};
        addCardList[i] = addcard;
    }

    return {
        cardsById,
        cardsByIndex,
        addCardList,
    };
}
let pendingUpdateFn: any;
let requestedFrame: number | undefined;
export default class Container extends React.Component<{}, ContainerState> {

    constructor(props: {}) {
        super(props)
        this.state = buildCardData()
    }

    componentWillUnmount() {
        if ( requestedFrame !== undefined) {
            // clearTimeout(this.requestedFrame)
            // cancelAnimationFrame(this.requestedFrame)
            requestedFrame = undefined;
            pendingUpdateFn = undefined;
        }
    }


    render() {
        const { cardsByIndex, addCardList } = this.state;

        return (
        <>
            <div style={style}>
            {
                cardsByIndex.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        text={card.text}
                        moveCard={this.moveCard}
                        deleteOne = { this.deleteOne}
                        />
                ))
            }
            </div>


            <div className={ styles["addcard"] }>
                <ul>
                    {
                        addCardList.map( addcard => (
                            <li
                                key = { addcard.id - 11 }
                                onClick = { ()=>this.addCardOne(addcard) }
                            >
                                {addcard.text}
                                <i className="iconfont icon-tianjia3"></i>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
        )
    }

    scheduleUpdate(updateFn: any) {
        pendingUpdateFn = updateFn;
        if (!requestedFrame) {
            this.drawFrame();
            //   this.requestedFrame = requestAnimationFrame(this.drawFrame);
        }
    }

    deleteOne = (id: string) => {
        const { cardsById, cardsByIndex } = this.state;
        const card = cardsById[id];
        const cardIndex = cardsByIndex.indexOf(card);
        this.scheduleUpdate({
            cardsByIndex: {
                $splice: [
                [cardIndex, 1],
                ],
            },
            addCardList: {
                $push: [ card ],
            }
        })
        
    }

    addCardOne = (newcard: any) => {
        const { cardsByIndex, cardsById, addCardList } = this.state;
        if( cardsByIndex.length > 10 ){
            message.warning("不能超过11个");
            message.config({
                top: 100,
                duration: 2,
                maxCount: 3,
              });
        }else{
            const removeIndex = addCardList.indexOf(newcard);
            addCardList.splice(removeIndex, 1);
            cardsByIndex.push(newcard);
            cardsById[newcard.id] = newcard;
            this.setState({
                addCardList,
                cardsByIndex,
                cardsById,
            })
        }
    }

    drawFrame = () => {
        const nextState = update(this.state, pendingUpdateFn);
        this.setState(nextState);

        pendingUpdateFn = undefined;
        requestedFrame = undefined;
    }

    moveCard = (id: string, afterId: string) => {
        const { cardsById, cardsByIndex } = this.state;

        const card = cardsById[id];
        const afterCard = cardsById[afterId]

        const cardIndex = cardsByIndex.indexOf(card)
        const afterIndex = cardsByIndex.indexOf(afterCard)

        this.scheduleUpdate({
            cardsByIndex: {
                $splice: [
                [cardIndex, 1],
                [afterIndex, 0, card],
                ],
            },
        })
    }
}
