import { Question } from './question'
import { JsonObject } from './jsonobject'
import { QuestionFactory } from './questionfactory'
import { LocalizableString } from './localizablestring'

/**
 * A Model for a comment question
 */
export class QuestionCommentModel extends Question {
  constructor(public name: string) {
    super(name)
    this.createLocalizableString('placeHolder', this)
  }
  /**
   * Use this property to set the input place holder.
   */
  public get placeHolder(): string {
    return this.getLocalizableStringText('placeHolder')
  }
  public set placeHolder(val: string) {
    this.setLocalizableStringText('placeHolder', val)
  }
  get locPlaceHolder(): LocalizableString {
    return this.getLocalizableString('placeHolder')
  }
  /**
   * The html rows attribute.
   */
  public get rows(): number {
    return this.getPropertyValue('rows', 4)
  }
  public set rows(val: number) {
    this.setPropertyValue('rows', val)
  }
  /**
   * The html cols attribute.
   */
  public get cols(): number {
    return this.getPropertyValue('cols', 50)
  }
  public set cols(val: number) {
    this.setPropertyValue('cols', val)
  }
  public getType(): string {
    return 'comment'
  }
  isEmpty(): boolean {
    return super.isEmpty() || this.value === ''
  }
}
JsonObject.metaData.addClass(
  'comment',
  [
    { name: 'cols:number', default: 50 },
    { name: 'rows:number', default: 4 },
    { name: 'placeHolder', serializationProperty: 'locPlaceHolder' },
  ],
  function() {
    return new QuestionCommentModel('')
  },
  'question'
)
QuestionFactory.Instance.registerQuestion('comment', name => {
  return new QuestionCommentModel(name)
})
