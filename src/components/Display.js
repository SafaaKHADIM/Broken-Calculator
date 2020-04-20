import React, {Component} from 'react';
import Box from '@material-ui/core/Box';

class Display extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <Box width="350px" height="100px" mx="auto" borderRadius={16}  component="span" display="block" p={1} m={1} bgcolor="background.paper">

                </Box>
            </div>
        );
    }
}



export default Display;