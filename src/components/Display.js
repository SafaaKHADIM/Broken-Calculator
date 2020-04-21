import React from 'react';
import Box from '@material-ui/core/Box';

function Display(props) {




        return (
            <div>
                <Box width="350px" height="100px" mx="auto" borderRadius={16}  component="span" display="block" p={1} m={1} bgcolor="background.paper">
                    {props.children}
                </Box>
            </div>
        );
    }




export default Display;