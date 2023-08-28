/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';
import InputLabel from './InputLabel';

export const getColor = (priority: string) => {
  if (priority === 'low') {
    return 'bg-priority-low';
  }
  if (priority === 'medium') {
    return 'bg-priority-med';
  }
  return 'bg-priority-high';
};

const InputPriority = <T extends FieldValues>(
  props: Omit<ControllerProps<T>, 'render'> & {
    label?: string;
    lines?: number;
    name: ControllerProps<T>['name'];
    control: Required<ControllerProps<T>['control']>;
    validator: (name: keyof T, val: any) => void;
    onChange?: (
      val: ControllerProps<T>['defaultValue'],
    ) => ControllerProps<T>['defaultValue'];
  },
) => {
  const {
    label,
    name,
    rules,
    control,
    lines = 1,
    validator,
    onChange,
    defaultValue,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({
        field: { onChange: onFieldChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <div>
            {label && (
              <div>
                <InputLabel label={label} />
              </div>
            )}
            <div className="grid grid-flow-col grid-cols-3 gap-2">
              {['low', 'medium', 'high'].map((option, idx) => {
                return (
                  <button
                    key={option}
                    className={`p-1  rounded-lg duration-300 text-charcoal ${
                      option === value
                        ? `border-0 ${getColor(option)} font-medium`
                        : 'border-2 bg-white border-white-dark'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      onFieldChange(option);
                    }}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                );
              })}
            </div>
          </div>
          {error && (
            <div>
              <div className="text-xs text-red-600 ">
                * {`${error?.message}`}
              </div>
            </div>
          )}
        </>
      )}
    />
  );
};

export default InputPriority;
