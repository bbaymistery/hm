// pages/show-ip.js
import { services } from '@/constants/headerLinkNames';
export default function Datas() {



    return (
        <div>
            <div>
                <h1>Datas:</h1>
                <pre>{JSON.stringify(services, null, 2)}</pre>
            </div>
        </div>
    );
}
