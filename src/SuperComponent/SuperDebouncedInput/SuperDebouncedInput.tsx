import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useState,
} from "react";
import SuperInputText from "../SuperInputText/SuperInputText";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
export type SuperDebouncedInputPropsType = Omit<
  DefaultInputPropsType,
  "type"
> & {
  // и + ещё пропсы которых нет в стандартном инпуте
  onChangeText?: (value: string) => void;
  onEnter?: () => void;
  error?: ReactNode;
  spanClassName?: string;
} & { // илм экспортировать тип SuperInputTextPropsType
  // плюс специальный пропс SuperPagination
  onDebouncedChange?: (value: string) => void;
};

const SuperDebouncedInput: React.FC<SuperDebouncedInputPropsType> = ({
  onChangeText,
  onDebouncedChange,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const [timerId, setTimerId] = useState<number | undefined | NodeJS.Timeout>(
    undefined
  );

  const onChangeTextCallback = (value: string) => {
    if (onChangeText) onChangeText(value);

    if (onDebouncedChange) {
      // делает студент
      clearTimeout(timerId);
      let Id = setTimeout(() => {
        onDebouncedChange(value);
      }, 1500);
      setTimerId(Id);
      // остановить предыдущий таймер
      // запустить новый на 1500ms, в котором вызовется функция

      //
    }
  };

  return <SuperInputText onChangeText={onChangeTextCallback} {...restProps} />;
};

export default SuperDebouncedInput;
