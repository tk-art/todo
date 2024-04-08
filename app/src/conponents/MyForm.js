import React, { useState } from 'react';
import axios from 'axios';

function MyForm() {
    const [title, setTitle] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/tasks/', { title });
            setTitle('');
            // ここでタスクリストを再取得するなどの処理を追加
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <button type="submit">追加</button>
        </form>
    );
}

export default MyForm;
