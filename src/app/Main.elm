module Main exposing (main)

import Browser
import Html exposing (Html)


type alias Flag =
    ()


type alias Model =
    {}


initialModel : Model
initialModel =
    {}


type Msg
    = NoOp


main : Program Flag Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


init : Flag -> ( Model, Cmd Msg )
init _ =
    ( initialModel, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )


view : Model -> Html Msg
view _ =
    Html.text "This is app!"


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none
