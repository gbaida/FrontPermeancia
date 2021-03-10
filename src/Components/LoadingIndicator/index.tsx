import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import "./styles.css"

interface itemProps{
    texto?:string;
}

const LoadingIndicator: React.FC<itemProps> = ({texto,...rest}) => {

    
    const {promiseInProgress} = usePromiseTracker();
  
    return (
        <div>
            {(promiseInProgress === true) ? (
            <div id='divLoading'>
                <div className="loadingIndicator">
                    <Loader type="ThreeDots" color="#00A86B" height={50} width={100}/>
                    <label id='labelLoadingIndicator'>{texto}</label>
                </div>
            </div>) : (null)}
        </div>
    ); 
}

export default LoadingIndicator