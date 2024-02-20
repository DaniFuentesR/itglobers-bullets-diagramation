import React from "react";
import { BulletsSchema} from "../BulletTypes";
import Bullet from "../Bullet";
import {useCssHandles} from "vtex.css-handles"



export const getBulletsAsTSXList = (bullets: BulletsSchema) => (

    
    
    bullets.map((bullet: any, index) => {
        console.log("Mi Bullet es:", bullet)
        const CSS_HANDLES = ["bullet__container"];
        const handles = useCssHandles( CSS_HANDLES)
        
        return(
            <div className={handles["bullet__container"]}>
           <Bullet
                
                key={index}
                src={bullet.image}
                titleBullet= {bullet.titleBullet}
                link={
                    bullet.link ? bullet.link : {
                        url: "",
                        attributeNoFollow: false,
                        attributeTitle: "",
                        openNewTab: false,
                        newTab: false
                    }
                }
           />
           </div>
            
        
        )
    } )
)


