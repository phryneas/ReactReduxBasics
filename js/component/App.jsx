
    /*******************************************************************************************************************
    *   The entire application component.
    *
    *   TODO HIGH Create package 'redux'.
    *   TODO HIGH Class 'ReduxAction'.
    *   TODO HIGH Class 'ReduxReducer'.
    *   TODO HIGH Class 'ReduxConnectors'.
    *   TODO WEAK try: Extend Redux.Component
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    class App extends React.Component
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return {JSXTransformer} The rendered JSX.
        ***************************************************************************************************************/
        render()
        {
            console.log( "App.render() being invoked" );

            return <div>

                { /* title */ }
                <h1 id="appTitle">{ this.props.title }</h1>

                { /* task input form */ }
                <TaskInput />

                { /* task list */ }
                <TaskList />

            </div>;
        }
    }
