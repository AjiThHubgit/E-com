import React from 'react';
import { useSelector } from 'react-redux';


import '../assets/styles/Global.scss';
import Card from '../components/Card';
import CardSkeleton from '../components/CardSkeleton';

function CardContainer() {
    const state = useSelector(state => state.thunkApi);
    const { data, isError, isLoading } = state;
    const skeletonLen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
    // console.log('data', data);
    // console.log('isError', isError);
    // console.log('isLoading', isLoading);
    console.log('data', data);
    // console.log('data', data[1].items)

    return (
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className='container-fluid'>
            {
                isLoading === true ? skeletonLen.map(() => (<CardSkeleton />)) :
                    data.map((producList, index) => producList.items.map((item) => (<Card item={item} />)))
            }
        </section>
    )
}

export default CardContainer;