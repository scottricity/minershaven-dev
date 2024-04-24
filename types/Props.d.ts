type KVComponentProps = {
    children?: React.ReactNode
}

type KVProps = KVComponentProps&{
    [key: string]: any;
}