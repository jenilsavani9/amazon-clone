import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useStateValue } from './StateProvider'

const Loader = () => {

    const [{ loader_status }, dispatch] = useStateValue();

    const setLoader = () => {
        dispatch({
            type: 'CHANGE_LOADER',
            loader: false,
            loader_status: 0
        })
    }

    return (
        <div>
            <LoadingBar
                color='#ff6d00'
                height={3}
                progress={loader_status}
                shadow={true}
                onLoaderFinished={() => setLoader()}
            />
        </div>
    )
}

export default Loader