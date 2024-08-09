import CardProduct from "@/app/components/atoms/CardProduct";
import Divider from "@/app/components/atoms/Divider";
import PainelHeader from "@/app/components/molecules/PainelHeader";
import SwitchPageHeader from "@/app/components/atoms/SwitchPageHeader";

export default function Home() {
    // Atualize os itens para incluir a rota
    const items = [
        { name: 'Item 1', route: '/item1' },
        { name: 'Item 2', route: '/item2' },
        { name: 'Item 3', route: '/item3' }
    ];

    return (
        <div className="w-full h-full flex flex-col p-8">
            <h1 className="text-primary-900 text-2xl font-extrabold">Gerencie seus produtos</h1>
            
       
            <SwitchPageHeader itemHeader="" items={items} />
            
            <PainelHeader />
            
            <Divider color="primary-900" />
            
            <CardProduct isActive={true} name="Produto 1" price={100} id={1} />
        </div>
    );
}
