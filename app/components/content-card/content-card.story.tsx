import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { ContentCard } from "./content-card"

declare var module

storiesOf("ContentCard", module)
.addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
.add("Style Presets", () => (
  <Story>
    <UseCase text="Primary" usage="The primary.">
      <ContentCard index={0} item={{
        title: "Mock title",
        content: "Mock content",
        favourited: false,
        toggleFavourited: () => {
        },
      }}/>
    </UseCase>
  </Story>
))
