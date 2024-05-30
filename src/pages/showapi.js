// pages/show-ip.js
import { useEffect, useState } from 'react';

export default function ShowIp() {
    const [ip, setIp] = useState('');

    useEffect(() => {
        const fetchIp = async () => {
            const res = await fetch('/api/get-ip');
            console.log({ res });
            const data = await res.json();
            console.log({ data });
            setIp(data.ip);
        };
        fetchIp();
    }, []);

    return (
        <div>
            <h1>Your IP Address is: {ip}</h1>
        </div>
    );
}
