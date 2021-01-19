import React, {useState} from "react";
import {createStyles, List, ListItem, ListItemText, makeStyles, Theme} from "@material-ui/core";
import {useEffectOnce} from "react-use";
import {fetchSearchIndex, Store} from "../model/searchIndex";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary
        },
        notFound: {
            color: "#818181"
        }
    }),
);

export function SearchList({to_search}: { to_search: string }) {
    const history = useHistory();
    const {i18n} = useTranslation();
    const [store, setStore] = useState<Store | null>(null);
    const classes = useStyles();
    useEffectOnce(() => {
            fetchSearchIndex(i18n.language).then(it => {
                setStore(it || null)
            });
        }
    );

    const items = () => {
        const searchResult = store?.fuse.search(to_search);
        if (searchResult?.length === 0) {
            return <ListItem className={classes.notFound}>无结果</ListItem>
        } else {
            return (
                <>
                    {
                        searchResult?.map(it => {
                            return (
                                <ListItem key={it.item.name} button component="a"
                                          onClick={() => {
                                              history.replace(`/prerendered/${it.item.path}`)
                                          }}>
                                    <ListItemText primary={it.item.name}/>
                                </ListItem>
                            )
                        })
                    }
                </>
            );
        }
    }

    return (
        <List className={classes.root}>
            {items()}
        </List>
    );
}