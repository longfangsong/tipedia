import {Divider, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import HomeIcon from '@material-ui/icons/Home';
import CasinoIcon from '@material-ui/icons/Casino';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import HelpIcon from '@material-ui/icons/Help';
import InfoIcon from '@material-ui/icons/Info';
import RoomIcon from '@material-ui/icons/Room';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import {fetchSearchIndex, SearchIndex} from "../model/searchIndex";
import {useEffectOnce} from "react-use";
import {useHistory} from "react-router";

export function ToolBarList() {
    const history = useHistory();
    const {t, i18n} = useTranslation();
    const [items, setItems] = useState<Array<SearchIndex>>([]);
    useEffectOnce(() => {
        fetchSearchIndex(i18n.language).then(it => {
            setItems(it!.items);
        });
    });
    return (
        <List>
            <ListItem button component="a" onClick={() => {
                history.replace(`/`)
            }}>
                <ListItemIcon>
                    <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary={t('Home')}/>
            </ListItem>
            <ListItem button component="a" onClick={() => {
                const selectedItem = items[Math.floor(Math.random() * items.length)];
                history.replace(`/prerendered/${selectedItem?.path}`)
            }}>
                <ListItemIcon>
                    <CasinoIcon/>
                </ListItemIcon>
                <ListItemText primary={t('Random')}/>
            </ListItem>
            <Divider/>
            <ListItem button onClick={() => history.replace(`/how`)}>
                <ListItemIcon>
                    <FormatListNumberedIcon/>
                </ListItemIcon>
                <ListItemText primary={t('How')}/>
            </ListItem>
            <ListItem button onClick={() => history.replace(`/why`)}>
                <ListItemIcon>
                    <HelpIcon/>
                </ListItemIcon>
                <ListItemText primary={t('Why')}/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <RoomIcon/>
                </ListItemIcon>
                <ListItemText primary={t('Where')}/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <QuestionAnswerIcon/>
                </ListItemIcon>
                <ListItemText primary={t('WhatIf')}/>
            </ListItem>
            <Divider/>
            <ListItem button component="a" onClick={() => {
                history.replace(`/prerendered/about%2Findex.htmlpart`)
            }}>
                <ListItemIcon>
                    <InfoIcon/>
                </ListItemIcon>
                <ListItemText primary={t('Info')}/>
            </ListItem>
        </List>
    );
}