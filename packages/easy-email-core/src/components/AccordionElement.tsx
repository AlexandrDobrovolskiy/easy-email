import { omit } from 'lodash';
import { BasicType } from '@core/constants';
import { RecursivePartial } from '@core/typings';
import React from 'react';
import { IAccordionElement } from '@core/blocks/AccordionElement';
import MjmlBlock from '@core/components/MjmlBlock';

export type AccordionElementProps = RecursivePartial<
  IAccordionElement['data']
> &
  RecursivePartial<IAccordionElement['attributes']> & {
    children?: JSX.Element | JSX.Element[] | string;
  };

export function AccordionElement(props: AccordionElementProps) {
  return (
    <MjmlBlock
      attributes={omit(props, ['data', 'children'])}
      value={props.value}
      type={BasicType.ACCORDION_ELEMENT}
    >
      {props.children}
    </MjmlBlock>
  );
}
