# Global Atlantic Semantic UI Styles

This is a collection of CSS styles used to override the Semantic UI styles in the Global Atlantic portal.

## Semantic UI Overrides

Below are the Semantic UI components that have custom styles applied to them:

<table style="width: 100%">
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Files</th>
    <th>Usage</th>
    <th>Criticality</th>
    <th>Success Rate</th>
  </tr>
  <tr>
    <td>The name of the Semantic UI component</td>
    <td>The type of the Semantic UI component</td>
    <td>The Semantic UI theme files required to style the component</td>
    <td>How often the component is used in the portal</td>
    <td>How critical the functionality of this component is</td>
    <td>The likelihood of these style overrides working<sup>1</sup></td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/elements/button/" target="_blank">Button</a></td>
    <td>Element</td>
    <td>button.css</td>
    <td>High</td>
    <td>High</td>
    <td>High</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/elements/button/" target="_blank">Checkbox</a></td>
    <td>Element</td>
    <td>checkbox.css</td>
    <td>Medium</td>
    <td>High</td>
    <td>High</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/elements/divider/" target="_blank">Divider</a></td>
    <td>Element</td>
    <td>divider.css</td>
    <td>Low</td>
    <td>Low</td>
    <td>High</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/modules/dropdown/" target="_blank">Dropdown</a></td>
    <td>Module</td>
    <td>dropdown.css</td>
    <td>Medium</td>
    <td>High</td>
    <td>Medium</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/collections/form/" target="_blank">Form Label</a></td>
    <td>Collection</td>
    <td>form.css</td>
    <td>High</td>
    <td>High</td>
    <td>High</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/elements/header/" target="_blank">Header</a></td>
    <td>Element</td>
    <td>header.css</td>
    <td>High</td>
    <td>Low</td>
    <td>Low</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/elements/input/" target="_blank">Input</a></td>
    <td>Element</td>
    <td>input.css, form.css</td>
    <td>High</td>
    <td>High</td>
    <td>High</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/elements/label/" target="_blank">Label</a></td>
    <td>Element</td>
    <td>label.css</td>
    <td>Medium</td>
    <td>Medium</td>
    <td>Low</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/collections/message/" target="_blank">Message</a></td>
    <td>Collection</td>
    <td>message.css</td>
    <td>Medium</td>
    <td>Low</td>
    <td>High</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/modules/modal" target="_blank">Modal</a></td>
    <td>Module</td>
    <td>modal.css</td>
    <td>Medium</td>
    <td>High</td>
    <td>High</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/elements/segment/" target="_blank">Segment</a></td>
    <td>Element</td>
    <td>segment.css</td>
    <td>High</td>
    <td>Low</td>
    <td>Medium</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/modules/tab/" target="_blank">Tab</a></td>
    <td>Module</td>
    <td>menu.css, segment.css</td>
    <td>Medium</td>
    <td>High</td>
    <td>High</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/collections/table/" target="_blank">Table</a></td>
    <td>Collection</td>
    <td>table.css</td>
    <td>High</td>
    <td>High</td>
    <td>Low</td>
  </tr>
  <tr>
    <td><a href="https://react.semantic-ui.com/addons/text-area/" target="_blank">Text Area</a></td>
    <td>Addon</td>
    <td>input.css</td>
    <td>Low</td>
    <td>Low</td>
    <td>High</td>
  </tr>
</table>

<br />

<sup>1</sup> These CSS style overrides may not apply in the portal correctly or at all if the portal is:

- not using the component where it would be expected to be used
- custom styles in the portal have greater CSS specificity
