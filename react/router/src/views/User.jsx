import { useSearchParams } from 'react-router-dom';

function User() {
    const [Params, setSearchParams] = useSearchParams();
    return (
        <h4>用户页面 -- {Params.get('id')}</h4>
    )
}

export default User;
