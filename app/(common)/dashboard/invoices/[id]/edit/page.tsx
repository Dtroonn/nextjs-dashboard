import { Suspense } from "react";
import { Content } from "./content";

export default function Page(props: {params: Promise<{id: string}>}) {
    return (
        <main>
            <Suspense fallback={<div>Loading EDIT PAGE...</div>}>
                <Content params={props.params}/>
            </Suspense>
        </main>
    );
}
