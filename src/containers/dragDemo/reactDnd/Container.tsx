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
            startdrag: false,
        }
    }

    componentDidMount(){
        const cardsById: { [key: string]: any } = {}
        const cardsByIndex: Array<object> = [];
        const addCardList : Array<object> = [];
    
        for (let i = 0; i < 20; i += 1) {
            let card = { id: i+1, text: i+1, href: "http://www.baidu.com", canMove: true , icon: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3240639892,262246657&fm=26&gp=0.jpg' }
            if(  i < 2){
                card = { id: i+1, text: i+1, href: "http://www.baidu.com", canMove: false, icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1423082072,3733016654&fm=11&gp=0.jpg' }
            }
            if(  i > 2 && i< 4){
                card = { id: i+1, text: i+1, href: "http://www.baidu.com", canMove: true, icon: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1982904135,4226855567&fm=26&gp=0.jpg' }
            }
            if(  i > 3 && i< 5){
                card = { id: i+1, text: i+1, href: "http://www.baidu.com", canMove: true, icon: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2050241383,3805111209&fm=26&gp=0.jpg' }
            }
            if(  i > 4 && i< 6){
                card = { id: i+1, text: i+1, href: "http://www.baidu.com", canMove: true, icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2050640350,694074992&fm=26&gp=0.jpg' }
            }
            if(  i > 5 && i< 7){
                card = { id: i+1, text: i+1, href: "http://www.baidu.com", canMove: true, icon: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=270107141,1887139729&fm=26&gp=0.jpg' }
            }
            if(  i > 6 && i< 8){
                card = { id: i+1, text: i+1, href: "http://www.baidu.com", canMove: true, icon: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4091995795,683975988&fm=26&gp=0.jpg' }
            }
            if(  i > 7 && i< 9){
                card = { id: i+1, text: i+1, href: "http://www.baidu.com", canMove: true, icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3857333249,179744864&fm=26&gp=0.jpg' }
            }
            cardsById[card.id] = card;
            cardsByIndex[i] = card;
        }
    
        for( let i=0;i<9;i++ ){
            const addcard = { id: i+20, text: i +20, href: "http://www.baidu.com" };
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
                        id={ card.id}
                        href = { card.href }
                        text = { card.text }
                        icon = { card.icon }
                        canMove = { card.canMove }
                        moveCard={this.moveCard}
                        // deleteOne = { this.deleteOne}
                        startdrag = { startdrag }
                        operateType ={ "up" }

                    />
                ))
            }
            </div>
            <Button onClick={()=>this.canDelete() }> { startdrag ? "可以管理" : "仅是查看"} </Button>
            <div className={ styles["addcard"] }>
                <ul>
                    {
                        cardsByIndex.slice(10,9999).map(card => (
                            <Card
                                key={ card.id } 
                                id={ card.id}
                                href = { card.href }
                                text = { card.text }
                                icon = { card.icon }
                                canMove = { card.canMove }
                                moveCard={this.moveCard}
                                // deleteOne = { this.deleteOne}
                                startdrag = { startdrag }  
                                operateType ={ "down" }
                            />
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
