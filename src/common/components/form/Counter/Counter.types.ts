export interface CounterProps {
  name: string;
  value?: number;
  min?: number;
  max?: number;
  onChange?: (quantity: number) => void;
}

export interface CounterReducer {
  action: {
    type: 'incremented' | 'decremented';
  };
  state: {
    value: number;
  };
  reducer: (
    state: CounterReducer['state'],
    action: CounterReducer['action'],
  ) => CounterReducer['state'];
}
