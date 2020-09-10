(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["05e67ed8"],{"0ff4":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"flex flex-center Page"},[r("BasicInfo",{attrs:{starting_name:e.getToonName,archetype_id:e.getToonArchetypeId,primary_name:e.getPrimaryPowerSetName,secondary_name:e.getSecondaryPowerSetName},on:{"power-set-clicked":e.showPowerSetPicker}}),r("Build",{on:{"selected-build":e.doBuildClicked}}),r("PowerEntryGrid",{on:{"power-clicked":e.doPowerClicked}}),r("PowerSetPicker",{class:e.getPowerSetPickerClass,on:{"power-set-picker-select":e.doPowerSetPickerSelectClick,"power-set-picker-cancel":e.doPowerSetPickerCancelClick}}),r("PowerPicker",{class:e.getPowerPickerClass,attrs:{availablePowerSets:e.availablePowerSets,powerLevel:e.powerLevel,powerEntry:e.powerEntry},on:{"power-picker-select":e.doPowerPickerSelectClick,"power-picker-cancel":e.doPowerPickerCancelClick}})],1)},o=[],s=r("967e"),i=r.n(s),l=(r("96cf"),r("fa84")),a=r.n(l),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"BasicInfo"},[r("div",[r("q-input",{staticClass:"BasicInfoName",attrs:{borderless:"",dense:"","hide-bottom-space":"","bg-color":"grey-3",label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),r("div",{staticClass:"BasicInfoArchetypeAndLevel"},[r("div",{staticClass:"BasicInfoArchetype"},[e._v("\n            "+e._s(e.archetype_name)+"\n        ")]),r("div",{staticClass:"BasicInfoLevel"},[e._v("\n            Level "+e._s(e.getLevel)+"\n        ")])]),r("div",{staticClass:"BasicInfoPrimaryAndSecondaryPowerSets",on:{click:e.doPowerSetClicked}},[e._v("\n        "+e._s(e.getPowerSetNames)+"\n    ")])])},u=[],d={name:"BasicInfo",created:function(){this.getArchetypeName()},props:{starting_name:{type:String,default:""},archetype_id:{type:String,default:""},primary_name:{type:String,default:""},secondary_name:{type:String,default:""}},data:function(){return{name:this.starting_name,archetype_name:this.starting_archetype_id}},computed:{getPowerSetNames:function(){return this.primary_name?this.primary_name+"/"+this.secondary_name:"Tap to set Primary/Secondary"},getLevel:function(){return this.$store.getters["builder/getToon"].level}},methods:{doPowerSetClicked:function(){this.$emit("power-set-clicked","")},getArchetypeName:function(){var e=this.$store.getters["builder/getArchetype"](this.archetype_id);this.archetype_name=e.display_name}},watch:{name:function(e,t){this.$store.commit("builder/changedName",e)}}},w=d,p=(r("5ed8"),r("2877")),_=r("eebe"),h=r.n(_),P=r("27f9"),m=Object(p["a"])(w,c,u,!1,null,"3d10d238",null),f=m.exports;h()(m,"components",{QInput:P["a"]});var y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Build"},[r("div",{staticClass:"BuildButtons"},[r("SVGCircleButton",{class:e.getBuild1Class,attrs:{text:"1",text_x:"8"},nativeOn:{click:function(t){return e.onBuild1Clicked(t)}}}),r("SVGCircleButton",{class:e.getBuild2Class,attrs:{text:"2",text_x:"8"},nativeOn:{click:function(t){return e.onBuild2Clicked(t)}}}),r("SVGCircleButton",{class:e.getBuild3Class,attrs:{text:"3",text_x:"8"},nativeOn:{click:function(t){return e.onBuild3Clicked(t)}}})],1),r("div",{staticClass:"BuildText"},[e._v("Build")])])},g=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{attrs:{height:e.getHeight,width:e.getWidth}},[r("circle",{attrs:{cx:e.getCX,cy:e.getCY,r:e.getR,stroke:"var(--svg-circle-stroke)","stroke-width":"var(--svg-circle-stroke-width)",fill:"var(--svg-circle-fill)","stroke-dasharray":"var(--svg-circle-stroke-dasharray)"}}),r("text",{attrs:{"dominant-baseline":"var(--svg-text-dominant-baseline)","text-anchor":"var(--svg-text-anchor)",x:e.getTextX,y:e.getTextY,fill:"var(--svg-text-fill)","font-family":"var(--svg-text-font-family)","font-size":"var(--svg-text-font-size)","font-weight":"var(--svg-text-font-weight)","stroke-width":"var(--svg-text-stroke-width)"}},[e._v("\n        "+e._s(e.getText)+"\n    ")])])},S=[],C=(r("c5f6"),{name:"SVGCircleButton",props:{width:{type:Number,default:25},height:{type:Number,default:25},cx:{type:Number,default:12},cy:{type:Number,default:12},r:{type:Number,default:10},text:{type:String,default:"i"},text_x:{type:String,default:"10"},text_y:{type:String,default:"17"}},computed:{getWidth:function(){return"string"===typeof this.width?Number(this.width):this.width},getHeight:function(){return"string"===typeof this.height?Number(this.height):this.height},getCX:function(){return"string"===typeof this.cx?Number(this.cx):this.cx},getCY:function(){return"string"===typeof this.cy?Number(this.cy):this.cy},getR:function(){return"string"===typeof this.r?Number(this.r):this.r},getText:function(){return this.text},getTextX:function(){return this.text_x},getTextY:function(){return this.text_y}}}),b=C,k=Object(p["a"])(b,v,S,!1,null,null,null),x=k.exports,B={components:{SVGCircleButton:x},name:"Build",computed:{getBuild1Class:function(){return 0===this.$store.getters["builder/getToonCurrentBuildNumber"]?"BuildSelected":"BuildNotSelected"},getBuild2Class:function(){return 1===this.$store.getters["builder/getToonCurrentBuildNumber"]?"BuildSelected":"BuildNotSelected"},getBuild3Class:function(){return 2===this.$store.getters["builder/getToonCurrentBuildNumber"]?"BuildSelected":"BuildNotSelected"}},methods:{onBuild1Clicked:function(){this.buildClicked(0)},onBuild2Clicked:function(){this.buildClicked(1)},onBuild3Clicked:function(){this.buildClicked(2)},buildClicked:function(e){this.$emit("selected-build",0),this.$store.commit("builder/toonSelectBuild",e)}}},N=B,T=(r("eb00"),Object(p["a"])(N,y,g,!1,null,"9d676696",null)),E=T.exports,O=r("ed0b"),I=r("a7ee"),$=r("d5eb"),R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{key:e.getCurrentBuildNumber,staticClass:"PowerEntryRows"},e._l(e.getColumnCount,(function(t){return r("span",{key:t,staticClass:"PowerEntryColumns"},e._l(e.getPowerEntriesPerColumn,(function(n){return r("span",{key:(t-1)*e.getPowerEntriesPerColumn+(n-1)},[(t-1)*e.getPowerEntriesPerColumn+(n-1)<e.getPowerEntryCount?r("PowerEntry",{staticClass:"PowerEntry",attrs:{power_entry:e.getPowerEntry((t-1)*e.getPowerEntriesPerColumn+(n-1))},on:{"power-clicked":e.doPowerClicked}}):e._e()],1)})),0)})),0)])},L=[],A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"PowerEntry",class:e.isNoPower?"Rise":"",on:{click:e.doClick}},[r("div",{staticClass:"PowerBar",class:e.getPowerBarClass},[r("PowerText",{attrs:{power_set_type:e.getPowerSetType,power_name:e.getPowerName,power_level:e.getPowerLevel}}),r("SVGCircleButton",{class:e.getPowerBarInfoButtonClass})],1),r("EnhancementSlotRow",{staticClass:"PowerEntrySlotRow",attrs:{power_set_type:e.getPowerSetType}})],1)},V=[],W=(r("6b54"),r("06db"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"SlotRow"},[r("EnhancementSlot",{class:e.getSlotClass(1),attrs:{power_set_type:e.getPowerSetType,slot_state:e.getSlotState(1),slot_level:e.slot1_slot_level,enhancement_level:e.slot1_enhancement_level}}),r("EnhancementSlot",{class:e.getSlotClass(2),attrs:{power_set_type:e.getPowerSetType,slot_state:e.getSlotState(2),slot_level:e.slot2_slot_level,enhancement_level:e.slot2_enhancement_level}}),r("EnhancementSlot",{class:e.getSlotClass(3),attrs:{power_set_type:e.getPowerSetType,slot_state:e.getSlotState(3),slot_level:e.slot3_slot_level,enhancement_level:e.slot3_enhancement_level}}),r("EnhancementSlot",{class:e.getSlotClass(4),attrs:{power_set_type:e.getPowerSetType,slot_state:e.getSlotState(4),slot_level:e.slot4_slot_level,enhancement_level:e.slot4_enhancement_level}}),r("EnhancementSlot",{class:e.getSlotClass(5),attrs:{power_set_type:e.getPowerSetType,slot_state:e.getSlotState(5),slot_level:e.slot5_slot_level,enhancement_level:e.slot5_enhancement_level}}),r("EnhancementSlot",{class:e.getSlotClass(6),attrs:{power_set_type:e.getPowerSetType,slot_state:e.getSlotState(6),slot_level:e.slot6_slot_level,enhancement_level:e.slot6_enhancement_level}})],1)}),j=[],D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"SlotBadgeColumn"},[r("div",{class:e.getLevelBadgeClass},[e._v(e._s(e.slot_level))]),r("SVGCircleButton",{staticClass:"Slot",class:e.getSlotClass,attrs:{width:40,height:40,cx:20,cy:20,r:19,text:e.slotsRemaining,text_x:"12",text_y:"24"}}),r("div",{class:e.getEnhancemenBadgeClass},[e._v(e._s(e.enhancement_level))])],1)])},G=[],H=r("2a6a"),z={NO_POWER:"NO_POWER",UNSLOTTED:"Unslotted",SLOTTED:"Slotted",ENHANCEMENT:"Enhancement"},U={components:{SVGCircleButton:x},name:"EnhancementSlot",props:{slot_level:{type:Number,default:0},enhancement_level:{type:Number,default:0},power_set_type:{type:String,default:H["a"].NO_POWER},slot_state:{type:String,default:z.NO_POWER},slots_remaining:{type:Number,default:0},show_slots_remaining:{type:Boolean,default:!0}},computed:{getSlotClass:function(){var e="";return this.power_set_type===H["a"].NO_POWER||this.slot_state===z.NO_POWER?e="SlotNoPower":this.slot_state===z.UNSLOTTED?e="SlotNoPowerRise":this.power_set_type===H["a"].PRIMARY?e="SlotPrimary":this.power_set_type===H["a"].SECONDARY?e="SlotSecondary":this.power_set_type===H["a"].POOL?e="SlotPool":this.power_set_type===H["a"].EPIC?e="SlotEpic":this.power_set_type===H["a"].INHERENT&&(e="SlotInherent"),e},getLevelBadgeClass:function(){return 0===this.slot_level?"Hidden":"SlotLevelBadge"},getEnhancemenBadgeClass:function(){return 0===this.enhancement_level?"Hidden":"SlotEnhancementBadge"},slotsRemaining:function(){return 0!==this.slots_remaining&&this.show_slots_remaining&&this.power_set_type===H["a"].NO_POWER?this.slots_remaining:""}}},Y=U,q=(r("9549"),Object(p["a"])(Y,D,G,!1,null,"30d60ba7",null)),J=q.exports,M={components:{EnhancementSlot:J},name:"EnhancementSlotRow",props:{power_set_type:{type:String,default:H["a"].NO_POWER},slot1_slot_level:{type:Number,default:0},slot1_enhancement_level:{type:Number,default:0},slot2_slot_level:{type:Number,default:0},slot2_enhancement_level:{type:Number,default:0},slot3_slot_level:{type:Number,default:0},slot3_enhancement_level:{type:Number,default:0},slot4_slot_level:{type:Number,default:0},slot4_enhancement_level:{type:Number,default:0},slot5_slot_level:{type:Number,default:0},slot5_enhancement_level:{type:Number,default:0},slot6_slot_level:{type:Number,default:0},slot6_enhancement_level:{type:Number,default:0}},computed:{slotsRemaining:function(){return 62},getPowerSetType:function(){return this.power_set_type},getSlotCount:function(){return this.slot6_slot_level>0?6:this.slot5_slot_level>0?5:this.slot4_slot_level>0?4:this.slot3_slot_level>0?3:this.slot2_slot_level>0?2:this.slot1_slot_level>0?1:0}},methods:{getSlotClass:function(e){if(this.power_set_type===H["a"].NO_POWER)return"";var t=this.getSlotCount+2;return e<=t?"":"Hidden"},getSlotState:function(e){var t=z.UNSLOTTED;return this.power_set_type===H["a"].NO_POWER&&(t=z.NO_POWER),1===e||e<=this.getSlotCount?t=z.SLOTTED:e<=6&&e===this.getSlotCount+2&&(t=z.UNSLOTTED),t}}},F=M,X=(r("3bfd"),Object(p["a"])(F,W,j,!1,null,"e1893a86",null)),K=X.exports,Q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"PowerText",on:{click:e.doClick}},[r("div",{staticClass:"PowerTextName",class:e.getPowerTextClass},[e._v(e._s(e.power_name))]),r("div",{staticClass:"PowerTextLevel",class:e.getPowerTextClass},[e._v("Level "+e._s(e.power_level))])])},Z=[],ee={name:"PowerText",props:{power_name:{type:String,default:""},power_level:{type:String,default:"0"},power_set_type:{type:String,default:H["a"].NO_POWER}},computed:{getPowerTextClass:function(){var e="",t=this.power_set_type;return this.power_set&&(t=this.power_set.group_name),t===H["a"].NO_POWER?e="PowerTextNoPower":t===H["a"].PRIMARY?e="PowerTextPrimary":t===H["a"].SECONDARY?e="PowerTextSecondary":t===H["a"].POOL?e="PowerTextPool":t===H["a"].EPIC?e="PowerTextEpic":t===H["a"].INHERENT&&(e="PowerTextInherent"),e}},methods:{doClick:function(){this.$emit("power-entry-event",{power_name:this.power_name,power_level:this.power_level,power_set_type:this.power_set_type})}}},te=ee,re=(r("1502"),Object(p["a"])(te,Q,Z,!1,null,"59cfe824",null)),ne=re.exports,oe={components:{EnhancementSlotRow:K,PowerText:ne,SVGCircleButton:x},name:"PowerEntry",created:function(){var e=a()(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),props:{power_entry:{type:Object,default:null}},computed:{getCurrentBuildNumber:function(){return this.$store.getters["builder/getToonCurrentBuildNumber"]},getPower:function(){if(!this.power_entry||!this.power_entry.power_entry||""===this.power_entry.power_entry.power_id)return null;var e=this.$store.getters["builder/getPower"](this.power_entry.power_entry.power_id);return e},getPowerBarClass:function(){var e="",t=this.getPowerSetType;return t===H["a"].NO_POWER?e="PowerBarNoPower":t===H["a"].PRIMARY?e="PowerBarPrimary":t===H["a"].SECONDARY?e="PowerBarSecondary":t===H["a"].POOL?e="PowerBarPool":t===H["a"].EPIC?e="PowerBarEpic":t===H["a"].INHERENT&&(e="PowerBarInherent"),e},getPowerBarInfoButtonClass:function(){var e="";return e=this.getPowerSetType===H["a"].NO_POWER?"PowerBarInfoButtonDisabled":"PowerBarInfoButton",e},getPowerLevel:function(){return this.power_entry&&this.power_entry.level?Object(O["b"])(this.power_entry.level).toString():"0"},getPowerName:function(){var e=this.getPower;return e?e.display_name:"Tap to select power."},getPowerSet:function(){var e=this.getPower;if(!e)return null;var t=this.$store.getters["builder/getPowerSet"](e.power_set_id);return t},getPowerSetType:function(){var e=this.getPowerSet;return e?e.set_type:H["a"].NO_POWER},isNoPower:function(){return this.getPowerSetType===H["a"].NO_POWER},slotsRemaining:function(){return 62}},methods:{doClick:function(e){var t=this.getPowerSetType;t!==H["a"].INHERENT&&this.$emit("power-clicked",this.power_entry)}},watch:{getCurrentBuildNumber:function(e,t){this.$forceUpdate()}}},se=oe,ie=(r("cd5f"),Object(p["a"])(se,A,V,!1,null,"6073534a",null)),le=ie.exports,ae={name:"PowerEntryGrid",components:{PowerEntry:le},updated:function(){},computed:{getCurrentBuildNumber:function(){return this.$store.getters["builder/getToonCurrentBuildNumber"]},getPowerEntryCount:function(){var e=this.$store.getters["builder/getToonSortedPowerEntries"],t=e.length;return t},getColumnCount:function(){return"max_power_entry_columns_4"===this.$mq?4:"max_power_entry_columns_3"===this.$mq?3:"max_power_entry_columns_2"===this.$mq?2:"mobile"===this.$mq?1:"tablet"===this.$mq?3:"laptop"===this.$mq?4:"desktop"===this.$mq?4:1},getPowerEntriesPerColumn:function(e){var t=this.getColumnCount,r=this.getPowerEntryCount,n=Math.ceil(r/t);return n}},methods:{getPowerEntry:function(e){var t=this.$store.getters["builder/getToonSortedPowerEntries"];return t[e]},doPowerClicked:function(e){this.$emit("power-clicked",e)}},watch:{getCurrentBuildNumber:function(e,t){this.$forceUpdate()}}},ce=ae,ue=(r("1809"),Object(p["a"])(ce,R,L,!1,null,"6f7b4116",null)),de=ue.exports,we=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vue-draggable-resizable",{staticClass:"DraggableWrapper",attrs:{draggable:!0,resizable:!1,handles:[],z:10,w:1,h:1}},[r("div",{staticClass:"Center"},[r("div",{staticClass:"PowerPicker"},[r("div",{staticClass:"PowerPickerTitlebar"},[r("div",{staticClass:"PowerPickerTitle"},[e._v("Select Power For Level "+e._s(e.powerLevel))]),r("SVGCircleButton",{staticClass:"PowerPickerInfoButton"})],1),r("div",{staticClass:"PowerPickerBody"},[r("TextPicker",{attrs:{list:e.availablePowerSets.map((function(e){return e.display_name})),click_event:"selected-power-set",title:"Power Sets"},on:{"selected-power-set":e.doPowerSetClicked}}),r("TextPicker",{attrs:{list:e.availablePowers.map((function(e){return e.display_name})),click_event:"selected-power",title:"Powers"},on:{"selected-power":e.doPowerClicked}})],1),r("div",{staticClass:"PowerPickerButtons"},[r("div",{staticClass:"PowerPickerButton ",on:{click:e.onCancelClicked}},[e._v("Cancel")]),r("div",{class:e.getSelectButtonClass,on:{click:e.onSelectClicked}},[e._v("Select")])])])])])},pe=[],_e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"TextPicker"},[r("div",{staticClass:"TextPickerTitleBar"},[r("div",{staticClass:"TextPickerPowerSetTitle"},[e._v(e._s(e.title))])]),r("div",{staticClass:"TextPickerList"},e._l(e.list,(function(t,n){return r("div",{key:e.getKey(n),class:e.getItemClass(n),on:{click:function(t){return e.doClick(n)}}},[e._v("\n            "+e._s(t)+"\n        ")])})),0)])},he=[],Pe={name:"PowerText",props:{title:{type:String,default:"Title"},click_event:{type:String,default:"selected-item"},list:{type:Array,default:function(){return["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6","Item 7","Item 8"]}}},data:function(){return{currentSelection:-1}},methods:{getItemClass:function(e){return e===this.currentSelection?"TextPickerListItemSelected":"TextPickerListItem"},getKey:function(e){return this.click_event+e},doClick:function(e){this.currentSelection=e,this.$emit(this.click_event,e)}}},me=Pe,fe=(r("b6dd"),Object(p["a"])(me,_e,he,!1,null,"5fee4467",null)),ye=fe.exports,ge=r("fb19"),ve=r.n(ge),Se={components:{SVGCircleButton:x,TextPicker:ye,VueDraggableResizable:ve.a},name:"PowerPicker",created:function(){},props:{title:{type:String,default:""},availablePowerSets:{type:Array,default:function(){return[]}},powerLevel:{type:Number,default:0},powerEntry:{type:Object,default:function(){return{}}}},data:function(){return{availablePowers:[],selectedPowerSetIndex:-1,selectedPowerIndex:-1}},computed:{getSelectButtonClass:function(){return-1===this.selectedPrimaryPowerSetIndex||-1===this.selectedSecondaryPowerSetIndex?"PowerPickerButtonDisabled":"PowerPickerButton"}},methods:{doPowerSetClicked:function(e){this.selectedPowerSetIndex=e;var t={powerLevel:this.powerLevel,powerSetId:this.availablePowerSets[e].id};this.availablePowers=this.$store.getters["builder/getToonAllowedPowers"](t)},doPowerClicked:function(e){this.selectedPowerIndex=e},onCancelClicked:function(){this.availablePowers=[],this.$emit("power-picker-cancel","")},onSelectClicked:function(){if(-1!==this.selectedPowerSetIndex&&-1!==this.selectedPowerIndex){var e={power_set_index:this.selectedPowerSetIndex,power_set:this.availablePowerSets[this.selectedPowerSetIndex],power_index:this.selectedPowerIndex,power:this.availablePowers[this.selectedPowerIndex]};this.availablePowers=[],this.$emit("power-picker-select",e)}}}},Ce=Se,be=(r("c04d"),Object(p["a"])(Ce,we,pe,!1,null,"560b156e",null)),ke=be.exports,xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("vue-draggable-resizable",{staticClass:"DraggableWrapper",attrs:{draggable:!0,resizable:!1,handles:[],z:10,w:1,h:1}},[r("div",{staticClass:"Center"},[r("div",{staticClass:"PowerSetPicker"},[r("div",{staticClass:"PowerSetPickerTitlebar"},[r("div",{staticClass:"PowerSetPickerTitle"},[e._v("Select Power Sets")]),r("SVGCircleButton",{staticClass:"PowerSetPickerInfoButton"})],1),r("div",{staticClass:"PowerSetPickerBody"},[r("TextPicker",{attrs:{list:e.primaryPowerSets.map((function(e){return e.display_name})),click_event:"selected-primary",title:"Primary"},on:{"selected-primary":e.doPrimaryClicked}}),r("TextPicker",{attrs:{list:e.secondaryPowerSets.map((function(e){return e.display_name})),click_event:"selected-secondary",title:"Secondary"},on:{"selected-secondary":e.doSecondaryClicked}})],1),r("div",{staticClass:"PowerSetPickerButtons"},[r("div",{staticClass:"PowerSetPickerButton ",on:{click:e.onCancelClicked}},[e._v("Cancel")]),r("div",{class:e.getSelectButtonClass,on:{click:e.onSelectClicked}},[e._v("Select")])])])])])},Be=[],Ne={components:{SVGCircleButton:x,TextPicker:ye,VueDraggableResizable:ve.a},name:"PowerSetPicker",created:function(){this.fetchPrimaryPowerSets(),this.fetchSecondaryPowerSets()},props:{title:{type:String,default:""}},data:function(){return{primaryPowerSets:[],secondaryPowerSets:[],selectedPrimaryPowerSetIndex:-1,selectedSecondaryPowerSetIndex:-1}},computed:{getSelectButtonClass:function(){return-1===this.selectedPrimaryPowerSetIndex||-1===this.selectedSecondaryPowerSetIndex?"PowerSetPickerButtonDisabled":"PowerSetPickerButton"}},methods:{fetchPrimaryPowerSets:function(){var e=this.$store.getters["builder/getToonArchetypeId"];this.primaryPowerSets=this.$store.getters["builder/getPrimaryPowerSetsFromArchetype"](e)},fetchSecondaryPowerSets:function(){var e=this.$store.getters["builder/getToonArchetypeId"];this.secondaryPowerSets=this.$store.getters["builder/getSecondaryPowerSetsFromArchetype"](e)},doPrimaryClicked:function(e){this.selectedPrimaryPowerSetIndex=e},doSecondaryClicked:function(e){this.selectedSecondaryPowerSetIndex=e},onCancelClicked:function(){this.$emit("power-set-picker-cancel","")},onSelectClicked:function(e){if(-1!==this.selectedPrimaryPowerSetIndex&&-1!==this.selectedSecondaryPowerSetIndex){var t={primary_power_set_index:this.selectedPrimaryPowerSetIndex,primary_power_set:this.primaryPowerSets[this.selectedPrimaryPowerSetIndex],secondary_power_set_index:this.selectedSecondaryPowerSetIndex,secondary_power_set:this.secondaryPowerSets[this.selectedSecondaryPowerSetIndex]};this.$emit("power-set-picker-select",t)}}}},Te=Ne,Ee=(r("1dbc"),Object(p["a"])(Te,xe,Be,!1,null,"4ad70bc8",null)),Oe=Ee.exports,Ie={components:{BasicInfo:f,Build:E,PowerEntryGrid:de,PowerPicker:ke,PowerSetPicker:Oe},name:"PageToon",beforeCreate:function(){var e=this;null==this.$store.getters["builder/getToon"]&&window.location.assign("/"),$["a"].register(this,I["a"].TOON_SAVE,(function(){e.doSave()}))},data:function(){return{powerSetPickerVisible:!0,powerPickerVisible:!1,primary_power_set_display_name:"",secondary_power_set_display_name:"",availablePowerSets:[],powerLevel:0,powerEntry:null,showSpinner:!1}},computed:{getCurrentBuild:function(){var e=this.$store.getters["builder/getToonCurrentBuild"];return e},getCurrentBuildNumber:function(){var e=this.$store.getters["builder/getToonCurrentBuildNumber"];return null===e?0:e},getPowerPickerClass:function(){return this.powerPickerVisible?"":"Hidden"},getPowerSetPickerClass:function(){return this.powerSetPickerVisible?"":"Hidden"},getPrimaryPowerSetName:function(){return""===this.primary_power_set_display_name?"Tap to set Primary":this.primary_power_set_display_name},getSecondaryPowerSetName:function(){return""===this.secondary_power_set_display_name?"Secondary":this.secondary_power_set_display_name},getToonArchetypeId:function(){var e=this.$store.getters["builder/getToonArchetypeId"];return null===e?"":e},getToonLevel:function(){var e=this.$store.getters["builder/getToonLevel"];return null===e?0:e},getToonName:function(){var e=this.$store.getters["builder/getToonName"];return null===e?"":e}},methods:{doBuildClicked:function(e){this.$forceUpdate()},doClick:function(e){alert(JSON.stringify(e))},doPowerClicked:function(e){this.powerLevel=this.getPowerLevel(e),this.powerEntry=e,this.availablePowerSets=this.$store.getters["builder/getToonAllowedPowerSets"](e.level),""===this.primary_power_set_display_name?this.showPowerSetPicker():this.showPowerPicker()},doPowerPickerCancelClick:function(){this.powerPickerVisible=!1},doPowerPickerSelectClick:function(){var e=a()(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r={level:Object(O["b"])(this.powerEntry.level),power_id:t.power.id,tag:!1,stat_include:!0,variable_value:0,slots:[],sub_powers:[]},n={buildPowerLevel:this.powerEntry.level,powerEntry:r},this.$store.commit("builder/toonSetPowerEntry",n),this.powerPickerVisible=!1;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),doPowerSetPickerCancelClick:function(){this.powerSetPickerVisible=!1},doPowerSetPickerSelectClick:function(e){this.$store.commit("builder/toonSetPrimaryPowerSet",e.primary_power_set.id),this.$store.commit("builder/toonSetSecondaryPowerSet",e.secondary_power_set.id),this.primary_power_set_display_name=e.primary_power_set.display_name,this.secondary_power_set_display_name=e.secondary_power_set.display_name,this.powerSetPickerVisible=!1},doSave:function(){var e=this.$store.getters["builder/getToon"],t="https://hero-www-server.herokuapp.com/save-local",r=function(){var r=a()(i.a.mark((function r(){var n,o;return i.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=new FormData,n.set("text",e),r.prev=2,r.next=5,fetch(t,{method:"POST",body:n});case 5:o=r.sent,alert("response"+JSON.stringify(o)),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](2),alert("error"+JSON.stringify(r.t0));case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(){return r.apply(this,arguments)}}();alert("Save"),r()},getPowerLevel:function(e){return Object(O["b"])(e.level,this.getToonArchetypeId)},showPowerSetPicker:function(){this.powerSetPickerVisible=!0},showPowerPicker:function(){this.powerPickerVisible=!0}},watch:{getCurrentBuild:function(e,t){this.$forceUpdate()},getCurrentBuildNumber:function(e,t){this.$forceUpdate()}}},$e=Ie,Re=(r("51b1"),r("9989")),Le=Object(p["a"])($e,n,o,!1,null,"7f72e652",null);t["default"]=Le.exports;h()(Le,"components",{QPage:Re["a"]})},1502:function(e,t,r){"use strict";var n=r("debb"),o=r.n(n);o.a},1809:function(e,t,r){"use strict";var n=r("c548"),o=r.n(n);o.a},"1dbc":function(e,t,r){"use strict";var n=r("f10b"),o=r.n(n);o.a},"1e5e":function(e,t,r){},"3bfd":function(e,t,r){"use strict";var n=r("88a8"),o=r.n(n);o.a},"4d89":function(e,t,r){},"50e9":function(e,t,r){},"51b1":function(e,t,r){"use strict";var n=r("9039"),o=r.n(n);o.a},"5a29":function(e,t,r){},"5ed8":function(e,t,r){"use strict";var n=r("aac5"),o=r.n(n);o.a},6946:function(e,t,r){},"88a8":function(e,t,r){},9039:function(e,t,r){},9549:function(e,t,r){"use strict";var n=r("4d89"),o=r.n(n);o.a},aac5:function(e,t,r){},b6dd:function(e,t,r){"use strict";var n=r("5a29"),o=r.n(n);o.a},c04d:function(e,t,r){"use strict";var n=r("6946"),o=r.n(n);o.a},c548:function(e,t,r){},cd5f:function(e,t,r){"use strict";var n=r("50e9"),o=r.n(n);o.a},debb:function(e,t,r){},eb00:function(e,t,r){"use strict";var n=r("1e5e"),o=r.n(n);o.a},f10b:function(e,t,r){}}]);