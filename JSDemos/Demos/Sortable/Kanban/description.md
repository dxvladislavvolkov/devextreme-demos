The [Sortable](/Documentation/ApiReference/UI_Widgets/dxSortable/) widget allows users to reorder elements using drag and drop.  In this demo, two different **Sortable**s (identified by the `class` attribute) are used:

- `sortable-lists`        
This **Sortable** allows users to reorder card lists. The widget nests `<div>` elements that represent the lists. The [handle](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#handle) option specifies that lists can be dragged by their titles. To correctly animate items being reordered, **Sortable** requires the item orientation. The [itemOrientation](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#itemOrientation) option is set to *"horizontal"* because card lists are orientated horizontally.

- `sortable-cards`         
This **Sortable** allows users to reorder cards. The widget nests `<div>` elements that represent all cards in a specific list. All **Sortable**s are added to the same [group](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#group) to allow users to move cards between lists.

When a user moves an element in the UI, you need to move the corresponding data object in code. Handle events to implement this functionality. These events depend on your use-case. In this demo, we handle the [onDragStart](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onDragStart) and [onAdd](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onAdd) events for **Sortable** with the `sortable-lists` class and the [onReorder](/Documentation/ApiReference/UI_Widgets/dxSortable/Configuration/#onReorder) event for both **Sortable**s.

In addition to **Sortable**, this kanban board implementation uses the [ScrollView](/Demos/WidgetsGallery/Demo/ScrollView/Overview/) widget. The widget's instance with the `scrollable-board` class allows you to scroll the board left to right. The widget's instance with the `scrollable-list` class makes lists scrollable.