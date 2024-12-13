import React,{useState,useEffect,useRef} from "react";

export function useCallbackState(od) {
    const cbRef = useRef();
    const [data, setData] = useState(od);

    useEffect(() => {
      cbRef.current && cbRef.current(data);
    }, [data]);

    return [
      data,
      function (d, callback) {
        cbRef.current = callback;
        setData(d);
      }
    ];
}