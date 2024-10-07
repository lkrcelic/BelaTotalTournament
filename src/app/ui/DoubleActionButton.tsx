import {Grid} from "@mui/system";
import {Button} from "@mui/material";
import React from "react";

type DoubleActionButtonProps = {
    secondButtonLabel: string;
    secondButtonOnClick: () => void;
    secondButtonDisabled?: boolean;
}

export default function DoubleActionButton({
                                               secondButtonLabel,
                                               secondButtonOnClick,
                                               secondButtonDisabled
                                           }: DoubleActionButtonProps) {
    return (
        <Grid container spacing={2} sx={{width: "100%"}}>
            <Grid item size={{xs: 6}}>
                <Button
                    color="primary"
                    variant="outlined"
                    sx={{width: "100%", fontSize: "16px"}}
                    onClick={() => {
                        window.history.back();
                    }}
                >
                    Nazad
                </Button>
            </Grid>
            <Grid item size={{xs: 6}}>
                <Button
                    color="primary"
                    variant="contained"
                    sx={{width: "100%", fontSize: "16px"}}
                    onClick={secondButtonOnClick}
                    disabled={secondButtonDisabled}
                >
                    {secondButtonLabel}
                </Button>
            </Grid>
        </Grid>
    );
}