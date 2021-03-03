import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router";
import {fetchSearchIndex, SearchIndex} from "../model/searchIndex";
import {useEffectOnce} from "react-use";
import {TagColor} from "../model/tag";

const useStyles = makeStyles({
    table: {
        maxWidth: 650,
    },
    row: {
        cursor: "pointer",
        '&:hover': {
            background: "#f1f1f1",
        },
    },
    tag: {
        display: "inline-block",
        color: "white",
        padding: 4,
        borderRadius: 4,
        marginRight: 4,
        fontWeight: "bold",
        height: 26,
        lineHeight: "20px",
    }
});

export default function AllDataTable({variant}: { variant: string }) {
    const classes = useStyles();
    const {t, i18n} = useTranslation();
    const history = useHistory();
    const [data, setData] = useState<Array<SearchIndex>>([]);
    useEffectOnce(() => {
            fetchSearchIndex(i18n.language).then(it => {
                const items = it?.items.filter(it => it.path.startsWith(variant)) || [];
                setData(items);
            });
        }
    );

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="table">
                <TableHead>
                    <TableRow>
                        <TableCell>{t("Name")}</TableCell>
                        <TableCell>{t("Category")}</TableCell>
                        <TableCell>{t("Tags")}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow className={classes.row} key={row.name} onClick={() => {
                            history.replace(`/prerendered/${row.path}`)
                        }}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{t(row.category)}</TableCell>
                            <TableCell>{row.tags.map((tag) =>
                                <span className={classes.tag}
                                      key={tag}
                                      style={{background: TagColor.get(tag) || "white"}}>{tag}</span>
                            )}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}