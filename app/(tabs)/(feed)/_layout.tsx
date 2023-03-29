import { Stack } from "expo-router";

export default function FeedLayout() {
	return (
		<Stack initialRouteName="feed" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="feed" />
			<Stack.Screen name="profile/friends" />
		</Stack>
	)
}