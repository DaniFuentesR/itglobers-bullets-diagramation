import React, {PropsWithChildren} from "react";
import {useListContext} from "vtex.list-context";
import { BulletsSchema} from "./BulletTypes";
import {useDevice} from "vtex.device-detector";
import {useCssHandles} from "vtex.css-handles"
import { getBulletsAsTSXList } from "./modules/bulletsAsList";

export interface BulletGroupProps {
    bullets: BulletsSchema
}

const BulletGroup = ({
    bullets, 
    children
}: PropsWithChildren<BulletGroupProps>) => {
    const {isMobile} = useDevice();
    const {list} = useListContext() || []
    const CSS_HANDLES = ["bullet__mainContainer"]
    const handles = useCssHandles(CSS_HANDLES)

    console.log("bullets", bullets);


    const bulletsGroup = getBulletsAsTSXList(bullets)

    if(false){
        console.log(children, list);
        
    }
    
    return(
        isMobile?
        <div className={handles["bullet__mainContainer"]}>{bulletsGroup}</div>
        :
        <div className={handles["bullet__mainContainer"]}>{bulletsGroup}</div>


        
    )
}

export default BulletGroup; 