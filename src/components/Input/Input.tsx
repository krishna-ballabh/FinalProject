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
                className={"relative inline-block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border rounded-none appearance-none b border-bottom-1z rounded-t-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" + className}
                placeholder = {placeholder} 
              />
            </div>
            {touched && <div className = "text-red-600">{error}</div>}
            
          </>
    );
};

Input.defaultProps = {}
export default memo(Input);
