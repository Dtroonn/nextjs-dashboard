
 
export default function Layout({ children }: { children: React.ReactNode }) {
    // console.log('HELLO FROM DASHBOARD LAYOUT', new Date().toISOString())
    return (
        <div className="grow p-6 md:overflow-y-auto md:p-12">
            Dashboard layout
            {children}
        </div>
    );
}
