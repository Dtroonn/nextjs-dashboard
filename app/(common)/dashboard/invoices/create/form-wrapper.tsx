import Form from '@/app/ui/invoices/create-form';
import { fetchCustomers } from '@/app/lib/data';
import { connection } from 'next/server';

export const FormWrapper = async () => {
      await connection()
      const customers = await fetchCustomers();
    return (
        <Form customers={customers} />
    )
}
