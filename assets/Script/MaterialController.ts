const {ccclass, property} = cc._decorator;

@ccclass
export default class MaterialController extends cc.Component {

    renderComponent: cc.RenderComponent;

    start() {
        this.renderComponent = this.getComponent(cc.RenderComponent);
    }

    updateMaterial(materialUBO: MaterialUBO) {
        let material: cc.Material = this.renderComponent.getMaterial(0);
        for (const key in materialUBO) {
            material.setProperty(key, materialUBO[key]);
        }
    }
}


export interface MaterialUBO{

}