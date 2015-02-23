!function(a){Craft.EntryDraftEditor=Garnish.Base.extend({$revisionBtn:null,$editBtn:null,$form:null,$nameInput:null,$saveBtn:null,$spinner:null,draftId:null,draftName:null,draftNotes:null,hud:null,loading:!1,init:function(b,c,d){this.draftId=b,this.draftName=c,this.draftNotes=d,this.$revisionBtn=a("#revision-btn"),this.$editBtn=a("#editdraft-btn"),this.addListener(this.$editBtn,"click","showHud")},showHud:function(){if(this.hud)this.hud.show();else{this.$form=a('<form method="post" accept-charset="UTF-8"/>');var b=a('<div class="field"><div class="heading"><label for="draft-name">'+Craft.t("Draft Name")+"</label></div></div>").appendTo(this.$form),c=a('<div class="input"/>').appendTo(b);this.$nameInput=a('<input type="text" class="text fullwidth" id="draft-name"/>').appendTo(c).val(this.draftName);var b=a('<div class="field"><div class="heading"><label for="draft-notes">'+Craft.t("Notes")+"</label></div></div>").appendTo(this.$form),c=a('<div class="input"/>').appendTo(b);this.$notesInput=a('<textarea class="text fullwidth" id="draft-notes" rows="2"/>').appendTo(c).val(this.draftNotes);var d=a('<div class="buttons"/>').appendTo(this.$form);this.$saveBtn=a('<input type="submit" class="btn submit disabled" value="'+Craft.t("Save")+'"/>').appendTo(d),this.$spinner=a('<div class="spinner hidden"/>').appendTo(d),this.hud=new Garnish.HUD(this.$editBtn,this.$form),new Garnish.NiceText(this.$notesInput),this.addListener(this.$notesInput,"keydown","onNotesKeydown"),this.addListener(this.$nameInput,"textchange","checkValues"),this.addListener(this.$notesInput,"textchange","checkValues"),this.addListener(this.$form,"submit","save"),this.hud.on("show",a.proxy(this,"onHudShow")),this.hud.on("hide",a.proxy(this,"onHudHide")),this.hud.on("escape",a.proxy(this,"onHudEscape")),this.onHudShow()}Garnish.isMobileBrowser(!0)||this.$nameInput.focus()},onHudShow:function(){this.$editBtn.addClass("active")},onHudHide:function(){this.$editBtn.removeClass("active")},onHudEscape:function(){this.$nameInput.val(this.draftName)},onNotesKeydown:function(a){a.keyCode==Garnish.RETURN_KEY&&(a.preventDefault(),this.$form.submit())},hasAnythingChanged:function(){return this.$nameInput.val()!=this.draftName||this.$notesInput.val()!=this.draftNotes},checkValues:function(){return this.$nameInput.val()&&this.hasAnythingChanged()?(this.$saveBtn.removeClass("disabled"),!0):(this.$saveBtn.addClass("disabled"),!1)},save:function(b){if(b.preventDefault(),!this.loading){if(!this.checkValues())return void this.shakeHud();this.loading=!0,this.$saveBtn.addClass("active"),this.$spinner.removeClass("hidden");var c={draftId:this.draftId,name:this.$nameInput.val(),notes:this.$notesInput.val()};Craft.postActionRequest("entryRevisions/updateDraftMeta",c,a.proxy(function(a,b){this.loading=!1,this.$saveBtn.removeClass("active"),this.$spinner.addClass("hidden"),"success"==b&&(a.success?(this.$revisionBtn.text(c.name),this.$revisionBtn.data("menubtn").menu.$options.filter(".sel").text(c.name),this.draftName=c.name,this.draftNotes=c.notes,this.checkValues(),this.hud.hide()):this.shakeHud())},this))}},shakeHud:function(){Garnish.shake(this.hud.$hud)}})}(jQuery);
//# sourceMappingURL=EntryDraftEditor.js.map