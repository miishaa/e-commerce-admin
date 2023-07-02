'use client';

import { StoreModal } from '@/components/modals/store-modal';
import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';
import { useEffect, useState } from 'react';

export default function Home() {
    const { isOpen, onOpen } = useStoreModal();

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [isOpen, onOpen]);

    return (
        <div className="p-4">
            <h1>Root page</h1>
        </div>
    );
}
