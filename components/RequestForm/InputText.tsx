/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Controller, ControllerProps, FieldValues } from 'react-hook-form';
import InputLabel from './InputLabel';

const InputText = <T extends FieldValues>(
  props: Omit<ControllerProps<T>, 'render'> & {
    label?: string;
    placeholder?: string;
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
    placeholder,
    lines = 1,
    validator,
    onChange,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange: onFieldChange, onBlur, value },
        fieldState: { error },
      }) => (
        <div className="flex flex-col gap-1">
          {label && (
            <div>
              <InputLabel label={label} />
            </div>
          )}
          {lines <= 1 ? (
            <input
              value={value}
              placeholder={placeholder}
              onBlur={onBlur}
              onChange={async (v) => {
                const val = onChange ? onChange(v.target.value as any) : v;
                onFieldChange(val);
                validator(name, val);
              }}
              className="w-full p-2 text-black rounded-lg bg-white-dark"
              //   numberOfLines={lines}
              //   multiline={lines > 1}
            />
          ) : (
            <textarea
              rows={lines}
              value={value}
              placeholder={placeholder}
              onBlur={onBlur}
              onChange={async (v) => {
                const val = onChange ? onChange(v.target.value as any) : v;
                onFieldChange(val);
                validator(name, val);
              }}
              className="w-full h-auto p-2 text-black rounded-lg bg-white-dark"
            />
          )}
          {error && (
            <div className="text-xs text-red-600">* {`${error?.message}`}</div>
          )}
        </div>
      )}
    />
  );
};

export default InputText;
