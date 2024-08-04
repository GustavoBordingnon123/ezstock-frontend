import Divider from "@/app/components/atoms/Divider";
import PainelHeader from "@/app/components/molecules/PainelHeader";

export default function Home(){

    return(
        <>
            <div className="w-full h-full flex flex-col p-8">

                <h1 className="text-primary-900 text-2xl font-extrabold">Gerencie seus produtos</h1>

                <PainelHeader />

                <Divider  color="primary-900"/>

            </div>
        </>
    )
}