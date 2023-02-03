import React, { useState, useEffect } from 'react';
import Article from './Article';
import Video from './Video';
import Wrapper from './Wrapper';
import './App.css';

const PopularVideo = Wrapper(Video);
const PopularArticle = Wrapper(Article);

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <PopularArticle {...item} />
                );

            case 'article':
                return (
                    <PopularVideo {...item}></PopularVideo>
                );
            default:
                return (
                    <p>Ничего не получилось!</p>
                );
        }
    });
};

export default function App() {
    const [list, setList] = useState([
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            views: 50
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            views: 12
        },
        {
            type: 'article',
            title: 'Невероятные события в неизвестном поселке...',
            views: 175
        },
        {
            type: 'article',
            title: 'Секретные данные были раскрыты!',
            views: 1532
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            views: 4253
        },
        {
            type: 'article',
            title: 'Кот Бегемот обладает невероятной...',
            views: 12,
        },
    ]);

    useEffect(() => {
        setList(prevList => prevList);
        console.log(list);
    }, [list]); // Перезапускать эффект только если list поменялся

    return (
        <List list={list} />
    );
}
