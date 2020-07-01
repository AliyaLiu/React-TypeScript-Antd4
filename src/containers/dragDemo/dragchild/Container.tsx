import React from 'react';
// import { name } from 'faker'
import Card from './Card';
import update from 'immutability-helper';
import styles from './index.scss';
import { message, Button } from 'antd';

const style = {
    width: 600,
    height: 60,
}

export interface ContainerState {
    cardsById: { [key: string]: any },
    cardsByIndex: any[],
    addCardList: any[],
    startdrag: boolean,
}
let pendingUpdateFn: any;
let requestedFrame: number | undefined;
export default class Container extends React.Component<{}, ContainerState> {

    constructor(props: {}) {
        super(props);
        // this.state = buildCardData()
        this.state = {
            cardsById: [],
            cardsByIndex : [],
            addCardList: [],
            startdrag: true,
        }
    }

    componentDidMount(){
        const cardsById: { [key: string]: any } = {}
        const cardsByIndex: Array<object> = [];
        const addCardList : Array<object> = [];
    
        for (let i = 0; i < 20; i += 1) {
            let card = { 
                id: i+1, 
                text: i+1, 
                canMove: true ,
                child:[
                    { menuId:1,text:i+''+1 },
                    { menuId:2,text:i+''+2 },
                    { menuId:3,text:i+''+3 },
                    { menuId:4,text:i+''+4 },
                ]
             }
            
            cardsById[card.id] = card;
            cardsByIndex[i] = card;
        }
    
        for( let i=0;i<9;i++ ){
            const addcard = { id: i+20, text: i +20};
            addCardList[i] = addcard;
        }
        this.setState({
            cardsById,  //原始排序的拖拽元素
            cardsByIndex,  //更改位置后的元素数组
            addCardList,
            startdrag: false,
        })
    }

    componentWillUnmount() {
        if ( requestedFrame !== undefined) {
            // cancelAnimationFrame(this.requestedFrame)
            requestedFrame = undefined;
            pendingUpdateFn = undefined;
        }
    }

    canDelete = ()=>{
        this.setState({
            startdrag: !this.state.startdrag
        })
    }

    render() {
        const { cardsByIndex, startdrag } = this.state;

        return (
        <>
            <div style={style}>
            {  
                cardsByIndex.slice(0,9).map(card => (
                    <Card
                        key={ card.id } 
                        card = { card }
                        id={ card.id}
                        text = { card.text }
                        icon = { card.icon }
                        canMove = { card.canMove }
                        moveCard={this.moveCard}
                        startdrag = { startdrag }
                        operateType ={ "up" }

                    />
                ))
            }
            </div>
            {/* <Button onClick={()=>this.canDelete() }> { startdrag ? "可以管理" : "仅是查看"} </Button> */}
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

    addCardOne = (newcard: any, event: any) => {
        if( this.state.startdrag ){
            const { cardsByIndex, cardsById, addCardList } = this.state;
            let e = event || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
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
    }

    drawFrame = () => {
        const nextState = update(this.state, pendingUpdateFn);
        this.setState(nextState);
        console.log(nextState);

        pendingUpdateFn = undefined;
        requestedFrame = undefined;
    }

    //id: 被拖动的元素 afterId: 目标元素
    moveCard = (id: string, afterId: string) => {
        let { cardsById, cardsByIndex } = this.state;
        let newcardsByIndex = cardsByIndex.slice();
        let card = cardsById[id];
        let afterCard = cardsById[afterId];

        const cardIndex = cardsByIndex.indexOf(card)
        const afterIndex = cardsByIndex.indexOf(afterCard);

        newcardsByIndex[cardIndex] = newcardsByIndex.splice(afterIndex, 1,card)[0];
        this.setState({
            cardsByIndex: newcardsByIndex,
        })

        //类似手机的拖拽排序
        // this.scheduleUpdate({
        //     cardsByIndex: {
        //         $splice: [
        //         [cardIndex, 1],
        //         [afterIndex, 0, card],
        //         ],
        //     },
        // })
    }
}
