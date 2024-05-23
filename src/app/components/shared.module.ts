import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { HeadComponent } from "./head/head.component";
import { ModalHeaderComponent } from "./modal-header/modal-header.component";
import { InnerHeadComponent } from "./inner-head/inner-head.component";

@NgModule({
    imports: [CommonModule, IonicModule],
    declarations: [
        HeadComponent,
        ModalHeaderComponent,
        InnerHeadComponent
    ],
    exports: [
        HeadComponent,
        ModalHeaderComponent,
        InnerHeadComponent
    ]
})
export class SharedModule {}