import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { CustomDrawerContentComponent } from "./CustomDrawerContentComponent"

declare var module

storiesOf("CustomDrawerContentComponent", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <CustomDrawerContentComponent text="CustomDrawerContentComponent" />
      </UseCase>
    </Story>
  ))
