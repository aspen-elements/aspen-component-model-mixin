/**
 * This mixin is responsible for providing a model for a component.
 * @polymerMixin
 * @mixinFunction
 */
export const AspenComponentModelMixin = (superclass) => class extends superclass {

		static get properties(){
        return {

            /** The model to be used for the object.*/
            model:{
                type: Object,
                value: null
            },

            /**
             * This flag is used to determine if the detail pane is in add mode or edit mode.
             * This is necessary because there are often fields that only make sense when you
             * are editing an entity, not when you are creating one for the first time.
             */ 
            isInAddMode:{
                type: Boolean,
                value: true
            }

        }
		}
}
