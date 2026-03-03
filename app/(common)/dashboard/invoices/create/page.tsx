import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { Suspense } from 'react';
import { FormWrapper } from './form-wrapper';
 
export default async function Page() {
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Suspense fallback={<div>Загрузка...</div>}>
        <FormWrapper/>
      </Suspense>
    </main>
  );
}
