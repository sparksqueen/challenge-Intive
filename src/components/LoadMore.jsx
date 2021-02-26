import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { getUsersPaging } from '../services/UserServices';
import { Button , Spinner } from 'react-bootstrap'


const LoadMore = () => {

    const { users, setUsers } = useContext( GlobalContext );
    const [page, setPage] = useState(0);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        if(page > 0) {
            async function GetUsersAsync () {
                const data = await getUsersPaging( 8, page )

                setUsers([...users, ...data])
                setIsFetching(false)
            }

            GetUsersAsync()
        }
    },[page])

    const showMore = () => {
        setIsFetching(true)
        setPage(page + 1)
    }

    return(
    <>
        <div className="container-fluid h-100"> 
    	    <div className="row w-100 align-items-center">
    	    	<div className="col text-center">
                    {isFetching ? <Spinner animation="border" role="status" />  
                                : <Button onClick={showMore} disabled={isFetching}>Mostrar Más</Button>
                    }               
    		    </div>	
    	    </div>    
        </div>
    </>
    )
}

export default LoadMore;