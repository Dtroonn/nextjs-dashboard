 
export default function Layout({ children }: { children: React.ReactNode }) {
  // console.log('HELLO FROM MARKETING LAYOUT', new Date().toISOString())
  return (
    <div className="grow p-6 md:overflow-y-auto md:p-12">
        Marketing layout
        {children}
    </div>
  );
}
