import {FC, InputHTMLAttributes, memo} from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement>{
  id?:string;  
  touched?: boolean;
    error?: string;
}

const Input: FC<Props> = ({touched, error, className,placeholder,id, ...rest}) =>{
    return(
        <>
            <div>
              {id && placeholder && (<label htmlFor={id} className="sr-only">
                  {placeholder}
              </label>)}
              <input
              id = {id}
                {...rest}
                className={"w-full pb-2 pl-8 placeholder-gray-400 border-b-2 outline-none" + className}
                placeholder = {placeholder} 
              />
            </div>
            {touched && <div className = "text-red-600">{error}</div>}
            
          </>
    );
};

Input.defaultProps = {}
export default memo(Input);
