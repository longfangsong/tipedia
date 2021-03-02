import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {useTranslation} from "react-i18next";
import {fetchSearchIndex, SearchIndex} from '../model/searchIndex';
import {useEffectOnce} from 'react-use';
import {useHistory} from "react-router";

const useStyles = makeStyles({
    root: {
        minWidth: 400,
        marginTop: 40,
    },
    title: {
        fontSize: 14,
    },
});

export default function DoYouKnow({variant, promote}: { variant: string, promote: string }) {
    const {t, i18n} = useTranslation();
    const history = useHistory();
    const [doYouKnow, setDoYouKnow] = useState<SearchIndex | null>(null);
    useEffectOnce(() => {
            fetchSearchIndex(i18n.language).then(it => {
                const items = it?.items.filter(it => it.path.startsWith(variant)) || [];
                setDoYouKnow(items[Math.floor(Math.random() * items.length)]);
                setInterval((() => {
                    setDoYouKnow(items[Math.floor(Math.random() * items.length)]);
                }), 3000);
            });
        }
    );

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {t("DoYouKnow")}
                </Typography>
                <Typography>
                    {t(promote)}
                </Typography>
                <Typography variant="h5" component="h2">
                    {doYouKnow?.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"
                        variant="contained"
                        onClick={() => {
                            history.replace(`/prerendered/${doYouKnow?.path}`)
                        }}
                        disableElevation>
                    {t("FindOutHere")}
                </Button>
            </CardActions>
        </Card>
    );
}
