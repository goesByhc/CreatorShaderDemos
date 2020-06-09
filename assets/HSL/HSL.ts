import { MaterialUBO } from './../Script/MaterialController';
import MaterialController from "../Script/MaterialController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HSV extends cc.Component {

    @property(cc.Sprite)
    spImage: cc.Sprite = null;

    hslUbBO: HSLUBO;

    materialController: MaterialController;

    onLoad() {
        this.hslUbBO = new HSLUBO();
        this.materialController = this.spImage.getComponent(MaterialController);
    }

    onSliderEvent(slider: cc.Slider, data: string) {
        if (data == "h") {
            this.hslUbBO.u_dH = slider.progress * 360; 
        } else if (data == "s") {
            this.hslUbBO.u_dS = slider.progress - 1;
        } else if (data == "l") {
            this.hslUbBO.u_dL = (slider.progress - 0.5) * 2;
        }
        this.materialController.updateMaterial(this.hslUbBO);
    }

}

class HSLUBO implements MaterialUBO{
    u_dH: number = 0;
    u_dS: number = 0;
    u_dL: number = 0;
}
