'use client';

import { Modal } from '@/components/ui/modal';
import { useEffect, useState } from 'react';

export default function Home() {
    const [openModal, setIsOpenModal] = useState(false);

    useEffect(() => setIsOpenModal(true), []);

    return (
        <div>
            <Modal
                isOpen={openModal}
                onClose={() => {}}
                description="here"
                title="Hello"
            >
                children
            </Modal>
        </div>
    );
}
