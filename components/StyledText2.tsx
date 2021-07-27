import * as React from 'react';
import { Text, TextProps } from './Themed';

export function SairaSB(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'sairaextracondensedsemibold' }]} />;
}
